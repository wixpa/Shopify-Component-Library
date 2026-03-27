// Central FA-string → Lucide component map
// Import this wherever registry icon strings need to be resolved

import {
   Type, // fa-font
   Palette, // fa-palette
   Square, // fa-square
   Tag, // fa-tag
   Heading, // fa-heading
   Droplets, // fa-fill-drip
   Search, // fa-magnifying-glass
   AlignLeft, // fa-bars-staggered
   Image, // fa-image
   Layers, // fa-layer-group
   Settings, // fa-gear  (fallback)
} from "lucide-react";

export const ICON_MAP = {
   "fa-font": Type,
   "fa-palette": Palette,
   "fa-square": Square,
   "fa-tag": Tag,
   "fa-heading": Heading,
   "fa-fill-drip": Droplets,
   "fa-magnifying-glass": Search,
   "fa-bars-staggered": AlignLeft,
   "fa-image": Image,
   "fa-layer-group": Layers,
};

/**
 * Resolve a FA icon string to a Lucide component.
 * Falls back to Settings icon if key not found.
 */
export const resolveIcon = (faKey) => ICON_MAP[faKey] ?? Settings;
