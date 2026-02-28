export function renameWebcamDevices() {
  const original = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
  navigator.mediaDevices.enumerateDevices = async () => {
    const devices = await original();
    return devices.map((device) => {
      if (device.kind === 'videoinput') {
        return Object.defineProperties(device, {
          label: { value: 'FaceTime HD Camera', writable: false },
        });
      }
      return device;
    });
  };
}

export function spoofMediaWithImage({ imageUrl, eventID }) {
  const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = async (constraints) => {
    if (!constraints?.video) return original(constraints);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    await new Promise((resolve) => {
      img.onload = resolve;
      img.src = imageUrl;
    });

    const canvas = document.createElement('canvas');
    const targetWidth = constraints.video?.width?.ideal || 640;
    const targetHeight = constraints.video?.height?.ideal || 480;

    const aspectRatio = img.width / img.height;
    const targetAspect = targetWidth / targetHeight;

    if (aspectRatio > targetAspect) {
      canvas.height = targetHeight;
      canvas.width = Math.round(targetHeight * aspectRatio);
    } else {
      canvas.width = targetWidth;
      canvas.height = Math.round(targetWidth / aspectRatio);
    }

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const stream = canvas.captureStream(30);

    if (eventID) {
      window.dispatchEvent(new CustomEvent(eventID, {
        detail: { success: true, type: 'image' },
      }));
    }

    return stream;
  };
}

export function spoofMediaWithVideo({ videoUrl, eventID }) {
  const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = async (constraints) => {
    if (!constraints?.video) return original(constraints);

    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.src = videoUrl;
    await video.play();

    const canvas = document.createElement('canvas');
    const targetWidth = constraints.video?.width?.ideal || 640;
    const targetHeight = constraints.video?.height?.ideal || 480;

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext('2d');
    const drawFrame = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawFrame);
    };
    drawFrame();

    const stream = canvas.captureStream(30);

    if (eventID) {
      window.dispatchEvent(new CustomEvent(eventID, {
        detail: { success: true, type: 'video' },
      }));
    }

    return stream;
  };
}

export default {
  renameWebcamDevices,
  spoofMediaWithImage,
  spoofMediaWithVideo,
};
