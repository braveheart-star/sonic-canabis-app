import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FooterTexts = {
  About: [
    {
      text: "Company",
      url: "",
    },
    {
      text: "Careers",
      url: "",
    },
    {
      text: "Help center",
      url: "",
    },
    {
      text: "Advocacy",
      url: "",
    },
    {
      text: "Download the app",
      url: "",
    },
  ],
  Discover: [
    {
      text: "Dispensaries",
      url: "",
    },
    {
      text: "Deliveries",
      url: "",
    },
    {
      text: "Doctors",
      url: "",
    },
    {
      text: "Nearby deals",
      url: "",
    },
    {
      text: "Brands",
      url: "",
    },
    {
      text: "Strains",
      url: "",
    },
    {
      text: "News",
      url: "",
    },
    {
      text: "Gear",
      url: "",
    },
    {
      text: "Recently viewed",
      url: "",
    },
  ],
  Legal: [
    {
      text: "Terms of use",
      url: "",
    },
    {
      text: "Privacy policy",
      url: "",
    },
    {
      text: "Cookie policy",
      url: "",
    },
    {
      text: "Referral program",
      url: "",
    },
  ],
};

export const Footer = () => {
  return (
    <div className="py-4 bg-gray-100 lg:py-8">
      <div className="w-full h-10 bg-green-500 " />
      <div className="grid grid-cols-1 p-4 mx-auto lg:py-8 max-w-7xl lg:grid-cols-12">
        <div className="col-span-4 ">
          <div className="flex-shrink-0 w-16 h-16 ">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={2000}
              height={2000}
            />
          </div>
          <p className="max-w-sm px-4 text-sm text-gray-500 lg:text-base">
            A community connecting cannabis consumers, patients, retailers,
            doctors, and brands.
          </p>
          <div className="flex p-4 space-x-4">
            <button className="flex items-center px-3 py-1 space-x-1 bg-gray-700 border rounded-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white fill-current"
              >
                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
              </svg>
              <p className="text-xs text-left text-gray-100">
                Download on the
                <br />
                <span className="text-sm font-bold">App Store</span>
              </p>
            </button>
            <button className="flex items-center px-3 py-1 space-x-1 bg-gray-700 border rounded-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white fill-current"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              <p className="text-xs text-left text-gray-100 ">
                Get it on
                <br />
                <span className="text-sm font-bold">Google Play</span>
              </p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 col-span-5 gap-y-2 lg:grid-cols-3 ">
          <div className="py-2 space-y-2 text-gray-500 ">
            <div className=" lg:hidden">
              <Accordion
                style={{ background: "#F3F4F6", padding: "0px" }}
                className="lg:hidden"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="font-bold ">About</p>
                </AccordionSummary>
                <AccordionDetails
                  className="space-y-2 "
                  style={{ display: "block" }}
                >
                  {FooterTexts.About.map((item, idx) => (
                    <p className="text-gray-600 " key={idx}>
                      {item.text}
                    </p>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center justify-between font-bold text-gray-700 ">
                About
              </div>
              {FooterTexts.About.map((item, idx) => (
                <p key={idx}>{item.text}</p>
              ))}
            </div>
          </div>

          <div className="py-2 space-y-2 text-gray-500 ">
            <div className=" lg:hidden">
              <Accordion
                style={{ background: "#F3F4F6", padding: "0px" }}
                className="lg:hidden"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="font-bold ">Discover</p>
                </AccordionSummary>
                <AccordionDetails
                  className="space-y-2 "
                  style={{ display: "block" }}
                >
                  {FooterTexts.Discover.map((item, idx) => (
                    <p className="text-gray-600 " key={idx}>
                      {item.text}
                    </p>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between font-bold text-gray-700 ">
                Discover
              </div>
              {FooterTexts.Discover.map((item, idx) => (
                <p key={idx}>{item.text}</p>
              ))}
            </div>
          </div>

          <div className="py-2 space-y-2 text-gray-500 ">
            <div className=" lg:hidden">
              <Accordion
                style={{ background: "#F3F4F6", padding: "0px" }}
                className="lg:hidden"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="font-bold ">Legal</p>
                </AccordionSummary>
                <AccordionDetails
                  className="space-y-2 "
                  style={{ display: "block" }}
                >
                  {FooterTexts.Legal.map((item, idx) => (
                    <p className="text-gray-600 " key={idx}>
                      {item.text}
                    </p>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between font-bold text-gray-700 ">
                Legal
              </div>
              {FooterTexts.Legal.map((item, idx) => (
                <p key={idx}>{item.text}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3 "></div>
      </div>

      <div className="absolute w-full text-sm text-center text-gray-500 lg:text-base bottom-2">
        Copyright © 2021 CannabisMap.
      </div>
    </div>
  );
};
