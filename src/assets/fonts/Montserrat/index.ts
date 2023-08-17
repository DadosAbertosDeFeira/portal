import localFont from "next/font/local";

export const montserrat = localFont({
  display: "swap",
  fallback: ["sans-serif"],
  src: [
    {
      path: "./Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});
