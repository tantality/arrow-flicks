import { CSSVariablesResolver } from "@mantine/core";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const defaultFontFamily = inter.style.fontFamily;

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    //title l
    "--title-size-l": "28px",
    "--title-l-bold-font": `700 28px/normal ${defaultFontFamily}`,
    //title s
    "--title-size-s": "20px",
    "--title-s-bold-font": `700 20px/20px ${defaultFontFamily}`,
    "--title-s-semibold-font": `600 20px/normal ${defaultFontFamily}`,
    //text base m
    "--text-base-size-m": "16px",
    "--text-base-m-bold-font": `700 16px/140% ${defaultFontFamily}`,
    "--text-base-m-regular-font": `400 16px/140% ${defaultFontFamily}`,
    //text base s
    "--text-base-size-s": "14px",
    "--text-base-s-semibold-font": `600 14px/140% ${defaultFontFamily}`,
    "--text-base-s-regular-font": `400 14px/20px ${defaultFontFamily}`,
    //sidebar
    "--sidebar-width": "280px"
  },
  light: {
    "--app-bg-color": theme.other.lightThemeColors.appBg,
    "--sidebar-bg-color": theme.other.lightThemeColors.sidebarBg,
    "--card-bg-color": theme.other.lightThemeColors.card.bg,

    //block-divider
    "--block-divider-color": theme.other.lightThemeColors.blockDivider,

    //logo
    "--logo-text-color": theme.other.lightThemeColors.logo.text,
    "--logo-icon-color": theme.other.lightThemeColors.logo.icon,

    //base-text
    "--accent-base-text-color": theme.other.lightThemeColors.baseText.accent,
    "--secondary-base-text-color":
      theme.other.lightThemeColors.baseText.secondary,

    //title
    "--accent-title-color": theme.other.lightThemeColors.title.accent,
    "--secondary-title-color": theme.other.lightThemeColors.title.secondary,

    //pagination
    "--pagination-btn-bg-color": theme.other.lightThemeColors.pagination.btn.bg,
    "--pagination-btn-icon-color":
      theme.other.lightThemeColors.pagination.btn.icon,
    "--pagination-btn-border-color":
      theme.other.lightThemeColors.pagination.btn.border,
    "--disabled-pagination-btn-border-color":
      theme.other.lightThemeColors.pagination.btn.disabled.border,
    "--disabled-pagination-btn-icon-color":
      theme.other.lightThemeColors.pagination.btn.disabled.icon,
    "--active-pagination-btn-bg-color":
      theme.other.lightThemeColors.pagination.btn.pressed.bg,
    "--active-pagination-btn-border-color":
      theme.other.lightThemeColors.pagination.btn.pressed.border,
    "--active-pagination-btn-text-color":
      theme.other.lightThemeColors.pagination.btn.pressed.text,

    //buttons
    //filled
    "--filled-btn-text-color": theme.other.lightThemeColors.btn.filled.text,
    "--filled-btn-bg-color": theme.other.lightThemeColors.btn.filled.bg,
    "--hover-filled-btn-bg-color":
      theme.other.lightThemeColors.btn.filled.hover.bg,
    "--active-filled-btn-bg-color":
      theme.other.lightThemeColors.btn.filled.pressed.bg,
    //text
    "--text-btn-text-color": theme.other.lightThemeColors.btn.text.text,
    "--disabled-text-btn-text-color":
      theme.other.lightThemeColors.btn.text.disabled.text,
    "--hover-text-btn-text-color":
      theme.other.lightThemeColors.btn.text.hover.text,
    "--active-text-btn-text-color":
      theme.other.lightThemeColors.btn.text.pressed.text,

    //form items
    "--form-item-bg-color": theme.other.lightThemeColors.formItem.bg,
    "--form-item-placeholder-color":
      theme.other.lightThemeColors.formItem.placeholder,
    "--form-item-border-color": theme.other.lightThemeColors.formItem.border,

    //shells
    "--hover-shell-text-color": theme.other.lightThemeColors.shell.hover.text,
    "--hover-shell-bg-color": theme.other.lightThemeColors.shell.hover.bg,
    "--active-shell-text-color":
      theme.other.lightThemeColors.shell.pressed.text,
    "--active-shell-bg-color": theme.other.lightThemeColors.shell.pressed.bg,

    //inputs
    "--input-caret-color": theme.other.lightThemeColors.input.caret,
    "--hover-input-border-color":
      theme.other.lightThemeColors.input.hover.border,
    "--focus-input-border-color":
      theme.other.lightThemeColors.input.focus.border,

    //icon buttons
    "--icon-btn-color": theme.other.lightThemeColors.iconBtn.color,
    "--disabled-icon-btn-color":
      theme.other.lightThemeColors.iconBtn.disabled.color,
    "--hover-icon-btn-color": theme.other.lightThemeColors.iconBtn.hover.color,
    "--active-icon-btn-color":
      theme.other.lightThemeColors.iconBtn.pressed.color,

    //icons
    "--icon-color": theme.other.lightThemeColors.icon.color,

    //tabs
    "--tab-bg-color": theme.other.lightThemeColors.tab.bg,
    "--hover-tab-text-color": theme.other.lightThemeColors.tab.hover.text,
    "--active-tab-text-color": theme.other.lightThemeColors.tab.pressed.text,
    "--active-tab-bg-color": theme.other.lightThemeColors.tab.pressed.bg,

    //breadcrumbs
    "--breadcrumb-divider-color":
      theme.other.lightThemeColors.breadcrumb.divider,
    "--breadcrumb-text-color": theme.other.lightThemeColors.breadcrumb.text,

    //rating stars
    "--rating-star-color": theme.other.lightThemeColors.ratingStar.color,
    "--hover-rating-star-color":
      theme.other.lightThemeColors.ratingStar.hover.color,
    "--active-rating-star-color":
      theme.other.lightThemeColors.ratingStar.pressed.color,

    //star btn stars
    "--star-btn-icon-color": theme.other.lightThemeColors.starBtn.icon,
    "--active-star-btn-icon-color":
      theme.other.lightThemeColors.starBtn.pressed.icon,
  },
  dark: {},
});
