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

export const lightThemeColors  = {
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
};