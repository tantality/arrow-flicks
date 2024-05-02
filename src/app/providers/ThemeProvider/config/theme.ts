import { createTheme, CSSVariablesResolver } from "@mantine/core";

const enum LightThemeColors {
  Purple_600 = "#541F9D",
  Purple_500 = "#9854F6",
  Purple_400 = "#BD93F7",
  Purple_300 = "#D1B4F8",
  Purple_200 = "#E5D5FA",
  Purple_100 = "#F2EBF9",

  White = "#FFFFFF",
  Black = "#000000",
  Yellow = "#FAB005",

  Grey_600 = "#7B7C88",
  Grey_500 = "#ACADB9",
  Grey_300 = "#D5D6DC",
  Grey_200 = "#EAEBED",
  Grey_100 = "#F5F5F6",

  Transparent = "transparent",
}

export const theme = createTheme({
  other: {
    lightThemeColors: {
      appBg: LightThemeColors.Grey_100,
      sidebarBg: LightThemeColors.Purple_100,
      card: {
        bg: LightThemeColors.White,
      },
      blockDivider: LightThemeColors.Grey_300,
      logo: {
        text: LightThemeColors.Purple_500,
        icon: LightThemeColors.Purple_500,
      },
      baseText: {
        accent: LightThemeColors.Black,
        secondary: LightThemeColors.Grey_600,
      },
      title: {
        accent: LightThemeColors.Purple_500,
        secondary: LightThemeColors.Black,
      },
      pagination: {
        btn: {
          bg: LightThemeColors.White,
          icon: LightThemeColors.Grey_600,
          border: LightThemeColors.Grey_300,
          disabled: {
            border: LightThemeColors.Grey_200,
            icon: LightThemeColors.Grey_300,
          },
          pressed: {
            bg: LightThemeColors.Purple_500,
            border: LightThemeColors.Purple_500,
            text: LightThemeColors.White,
          },
        },
      },
      btn: {
        filled: {
          text: LightThemeColors.White,
          bg: LightThemeColors.Purple_500,
          hover: {
            bg: LightThemeColors.Purple_400,
          },
          pressed: {
            bg: LightThemeColors.Purple_600,
          },
        },
        text: {
          text: LightThemeColors.Purple_500,
          disabled: {
            text: LightThemeColors.Grey_600,
          },
          hover: {
            text: LightThemeColors.Purple_400,
          },
          pressed: {
            text: LightThemeColors.Purple_600,
          },
        },
      },
      formItem: {
        bg: LightThemeColors.White,
        placeholder: LightThemeColors.Grey_500,
        border: LightThemeColors.Grey_300,
      },
      shell: {
        hover: {
          text: LightThemeColors.Black,
          bg: LightThemeColors.Purple_100,
        },
        pressed: {
          text: LightThemeColors.White,
          bg: LightThemeColors.Purple_500,
        },
      },
      input: {
        caret: LightThemeColors.Purple_500,
        hover: {
          border: LightThemeColors.Purple_500,
        },
        focus: {
          border: LightThemeColors.Purple_500,
        },
      },
      iconBtn: {
        color: LightThemeColors.Grey_500,
        hover: {
          color: LightThemeColors.Purple_400,
        },
        pressed: {
          color: LightThemeColors.Purple_500,
        },
      },
      icon: {
        color: LightThemeColors.Grey_500,
      },
      tab: {
        bg: LightThemeColors.Transparent,
        hover: {
          text: LightThemeColors.Purple_400,
        },
        pressed: {
          text: LightThemeColors.Purple_500,
          bg: LightThemeColors.Purple_200,
        },
      },
      breadcrumb: {
        divider: LightThemeColors.Black,
        text: LightThemeColors.Purple_500,
      },
      ratingStar: {
        color: LightThemeColors.Grey_300,
        hover: {
          color: LightThemeColors.Yellow,
        },
        pressed: {
          color: LightThemeColors.Yellow,
        },
      },
      starBtn: {
        icon: LightThemeColors.Grey_300,
        pressed: {
          icon: LightThemeColors.Purple_500,
        },
      },
    },
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-hero-height": theme.other.heroHeight,
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
    "--secondary-base-text-color": theme.other.lightThemeColors.baseText.secondary,

    //title
    "--accent-title-color": theme.other.lightThemeColors.title.accent,
    "--secondary-title-color": theme.other.lightThemeColors.title.secondary,

    //pagination
    "--pagination-btn-bg-color": theme.other.lightThemeColors.pagination.btn.bg,
    "--pagination-btn-icon-color": theme.other.lightThemeColors.pagination.btn.icon,
    "--pagination-btn-border-color": theme.other.lightThemeColors.pagination.btn.border,
    "--disabled-pagination-btn-border-color": theme.other.lightThemeColors.pagination.btn.disabled.border,
    "--disabled-pagination-btn-icon-color": theme.other.lightThemeColors.pagination.btn.disabled.icon,
    "--active-pagination-btn-bg-color": theme.other.lightThemeColors.pagination.btn.pressed.bg,
    "--active-pagination-btn-border-color": theme.other.lightThemeColors.pagination.btn.pressed.border,
    "--active-pagination-btn-text-color": theme.other.lightThemeColors.pagination.btn.pressed.text,
    
    //buttons
      //filled
    "--filled-btn-text-color": theme.other.lightThemeColors.btn.filled.text,
    "--filled-btn-bg-color": theme.other.lightThemeColors.btn.filled.bg,
    "--hover-filled-btn-bg-color": theme.other.lightThemeColors.btn.filled.hover.bg,
    "--active-filled-btn-bg-color": theme.other.lightThemeColors.btn.filled.pressed.bg,
      //text
    "--text-btn-text-color": theme.other.lightThemeColors.btn.text.text,
    "--disabled-text-btn-text-color": theme.other.lightThemeColors.btn.text.disabled.text,
    "--hover-text-btn-text-color": theme.other.lightThemeColors.btn.text.hover.text,
    "--active-text-btn-text-color": theme.other.lightThemeColors.btn.text.pressed.text,

    //form items
    "--form-item-bg-color": theme.other.lightThemeColors.formItem.bg,
    "--form-item-placeholder-color": theme.other.lightThemeColors.formItem.placeholder,
    "--form-item-border-color": theme.other.lightThemeColors.formItem.border,
    
    //shells
    "--hover-shell-text-color": theme.other.lightThemeColors.shell.hover.text,
    "--hover-shell-bg-color": theme.other.lightThemeColors.shell.hover.bg,
    "--active-shell-text-color": theme.other.lightThemeColors.shell.pressed.text,
    "--active-shell-bg-color": theme.other.lightThemeColors.shell.pressed.bg,

    //inputs
    "--input-caret-color": theme.other.lightThemeColors.input.caret,
    "--hover-input-border-color": theme.other.lightThemeColors.input.hover.border,
    "--focus-input-border-color": theme.other.lightThemeColors.input.focus.border,

    //icon buttons
    "--icon-btn-color": theme.other.lightThemeColors.iconBtn.color,
    "--hover-icon-btn-color": theme.other.lightThemeColors.iconBtn.hover.color,
    "--active-icon-btn-color": theme.other.lightThemeColors.iconBtn.pressed.color,

    //icons
    "--icon-color": theme.other.lightThemeColors.icon.color,

    //tabs
    "--tab-bg-color": theme.other.lightThemeColors.tab.bg,
    "--hover-tab-text-color": theme.other.lightThemeColors.tab.hover.text,
    "--active-tab-text-color": theme.other.lightThemeColors.tab.pressed.text,
    "--active-tab-bg-color": theme.other.lightThemeColors.tab.pressed.bg,

    //breadcrumbs
    "--breadcrumb-divider-color": theme.other.lightThemeColors.breadcrumb.divider,
    "--breadcrumb-text-color": theme.other.lightThemeColors.breadcrumb.text,

    //rating stars
    "--rating-star-color": theme.other.lightThemeColors.ratingStar.color,
    "--hover-rating-star-color": theme.other.lightThemeColors.ratingStar.hover.color,
    "--active-rating-star-color": theme.other.lightThemeColors.ratingStar.pressed.color,

    //rating stars
    "--star-btn-icon-color": theme.other.lightThemeColors.starBtn.icon,
    "--active-star-btn-icon-color": theme.other.lightThemeColors.starBtn.pressed.icon,
  },
  dark: {},
});
