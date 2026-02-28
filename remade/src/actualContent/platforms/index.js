/**
 * Platform registry - maps platform names to handler modules.
 * Task handlers will be implemented from the obfuscated source.
 */

import snapchat from './snapchat';
import instagram from './instagram';
import x from './x';
import reddit from './reddit';
import whatsapp from './whatsapp';
import telegram from './telegram';
import discord from './discord';
import tiktok from './tiktok';
import bumble from './bumble';
import tinder from './tinder';
import badoo from './badoo';
import grindr from './grindr';
import fetlife from './fetlife';
import pornhub from './pornhub';
import bluesky from './bluesky';
import messenger from './messenger';
import gvoice from './gvoice';
import linkedin from './linkedin';

export const platformRegistry = {
  snapchat,
  instagram,
  x,
  reddit,
  whatsapp,
  telegram,
  discord,
  tiktok,
  bumble,
  tinder,
  badoo,
  grindr,
  fetlife,
  pornhub,
  bluesky,
  messenger,
  gvoice,
  linkedin,
};
