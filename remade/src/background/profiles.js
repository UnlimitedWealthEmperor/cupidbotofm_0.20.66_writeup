import { PLATFORMS } from '../shared/constants';
import { getStorageOrLocal } from './storage';
import { extractDigits, stripHtml } from './utils';

export async function getStoredProfile(app) {
  return await getStorageOrLocal(app + 'Profile', null);
}

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  if (now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export async function normalizeProfile(app) {
  const raw = await getStoredProfile(app);
  if (!raw || !app) return null;

  let result = null;

  if (app === PLATFORMS.bumble || app === PLATFORMS.badoo) {
    const photoUrl = raw.profile_photo ? raw.profile_photo.large_url : null;
    let aboutMe = '';
    let profileText = '';
    let city = raw.city?.name;

    (raw.profile_fields || []).forEach((field) => {
      if (field.id === 'aboutme_text') aboutMe = field.display_value || '';
      if (field.id === 'location' && !city) city = field.display_value || '';
      profileText += ' ' + (field.display_value || '');
    });
    profileText += ' ' + (raw.profile_summary?.primary_text || '');
    profileText += ' ' + (raw.profile_summary?.secondary_text || '');

    result = {
      accountID: raw.user_id,
      name: raw.name,
      gender: raw.gender,
      imageURL: photoUrl ? 'https:' + photoUrl : null,
      DOB: new Date(raw.dob).getTime() / 1000,
      city,
      countryCode: raw.country?.iso_code ?? null,
      age: raw.age,
      distance: extractDigits(raw.distance_short),
      bio: stripHtml(aboutMe),
      profileText: stripHtml(profileText),
    };
  } else if (app === PLATFORMS.tinder) {
    let DOB = null;
    let age = null;
    if (raw.birth_date) {
      DOB = new Date(raw.birth_date).getTime() / 1000;
      age = calculateAge(raw.birth_date);
    }
    let bioText = raw.bio || '';
    (raw.selected_descriptors || []).forEach((d) => {
      (d.choice_selections || []).forEach((c) => { bioText += ' ' + (c.name || ''); });
    });
    (raw.jobs || []).forEach((j) => {
      bioText += ' ' + (j.title?.name || '');
      bioText += ' ' + (j.company?.name || '');
    });
    let cityOrTz = raw.pos_info?.city?.name ?? raw.pos_info?.timezone;
    if (cityOrTz) cityOrTz = cityOrTz.split('/')[1]?.replaceAll('_', ' ') ?? null;

    result = {
      accountID: raw._id,
      name: raw.name,
      gender: raw.gender,
      imageURL: raw?.photos?.[0]?.url ?? null,
      DOB, city: cityOrTz,
      countryCode: raw.pos_info?.country?.cc ?? null,
      age,
      distance: raw.distance_mi ?? raw.distance_km ?? raw.distance,
      bio: stripHtml(raw.bio),
      profileText: stripHtml(bioText),
    };
  } else if (app === PLATFORMS.snapchat) {
    const selfie = raw.bitmoji_selfie_id;
    const avatar = raw.bitmoji_avatar_id;
    const url = selfie && avatar
      ? `https://sdk.bitmoji.com/render/panel/${selfie}-${avatar}-ve.webp` : null;
    result = {
      accountID: raw.user_id,
      name: raw.display_name || raw.displayName || raw.display || raw.name,
      imageURL: url,
      username: raw.mutable_username || raw.mutableUsername || raw.username,
    };
  } else if (app === PLATFORMS.reddit) {
    result = { accountID: raw.userId, name: raw.displayName || raw.name, username: raw.rawDisplayName };
  } else if (app === PLATFORMS.instagram) {
    result = { accountID: raw.idStr, name: raw.full_name, username: raw.username, imageURL: raw.profile_pic_url };
  } else if (app === PLATFORMS.x) {
    result = { accountID: raw.id_str, name: raw.name, username: raw.screen_name, imageURL: raw.profile_image_url_https || raw.profile_image_url };
  } else if (app === PLATFORMS.whatsapp) {
    result = { accountID: raw.id?._serialized, name: raw.pushname || raw.name || raw.shortName, username: raw.id?.user };
  } else if (app === PLATFORMS.telegram) {
    const activeUsername = raw.usernames?.find((u) => u.isActive);
    const name = ((raw.firstName || '') + (raw.lastName ? ' ' + raw.lastName : '')) || activeUsername?.username || raw.phoneNumber;
    result = { accountID: raw.id, name: name?.trim(), username: activeUsername?.username };
  } else if (app === PLATFORMS.grindr) {
    result = { accountID: raw.profileId, name: raw.name || raw.displayName };
  } else if (app === PLATFORMS.gvoice) {
    result = { accountID: 't.' + raw.number, name: raw.name, email: raw.email, phone: raw.number };
  } else if (app === PLATFORMS.tiktok) {
    result = { accountID: raw.uid, name: raw.nickName, username: raw.uniqueId };
  } else if (app === PLATFORMS.discord) {
    const imgUrl = raw.id && raw.avatar
      ? `https://cdn.discordapp.com/avatars/${raw.id}/${raw.avatar}.webp?size=100` : null;
    result = { accountID: raw.id, name: raw.globalName, username: raw.username, imageURL: imgUrl };
  } else if (app === PLATFORMS.fetlife) {
    result = { accountID: raw.id, name: raw.nickname, username: raw.nickname };
  } else if (app === PLATFORMS.pornhub) {
    result = { accountID: raw.profileId, name: raw.profileUsername, username: raw.profileUsername };
  } else if (app === PLATFORMS.bluesky) {
    result = { accountID: raw.did, name: raw.handle, username: raw.handle };
  }

  return result;
}
