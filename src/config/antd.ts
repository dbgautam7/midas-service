import { ThemeConfig } from "antd";

export const customTheme: ThemeConfig = {
  components: {
    Breadcrumb: {
      lastItemColor: "rgba(0,0,0,0.45)",
      separatorMargin: 10,
      iconFontSize: 16,
      fontSize: 16,
    },
    Input: {
      hoverBorderColor: "none",
    },
    Pagination: {
      itemBg: "#f0f0f0",
    },
  },
};
