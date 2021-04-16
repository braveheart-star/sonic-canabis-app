import { setCookie, destroyCookie, parseCookies } from "nookies";
import { GetServerSidePropsContext, NextPageContext } from "next";

export const setAccessToken = (token: string) => {
  setCookie({}, "token", token, { maxAge: 3600 });
};

export const clearAccessToken = () => destroyCookie({}, "token");

export const getAccessToken = (
  ctx?: NextPageContext | GetServerSidePropsContext
) => parseCookies(ctx)?.token;
