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
    <div className="py-8 bg-gray-100">
      <div className="w-full h-10 bg-green-500 " />
      <div className="grid grid-cols-1 p-4 mx-auto space-y-4 lg:py-8 max-w-7xl lg:grid-cols-12 lg:space-y-0">
        <div className="col-span-4 space-y-4">
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
          <div className="flex px-4 space-x-4">
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
          <div className="flex px-4 space-x-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600 fill-current "
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600 fill-current "
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600 fill-current "
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600 fill-current "
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 col-span-5 gap-y-2 lg:grid-cols-3 ">
          <div className="py-2 space-y-2 text-gray-500 ">
            <div className=" lg:hidden">
              <Accordion
                style={{ background: "#F3F4F6" }}
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
                style={{ background: "#F3F4F6" }}
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
                style={{ background: "#F3F4F6" }}
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
        <div className="col-span-3 ">
          <div className="relative p-4 space-y-2 text-gray-100 rounded-lg bg-gradient-to-br from-green-600 to-green-700">
            <p className="text-lg font-bold ">Business with CM</p>
            <p>Get started</p>
            <p>Add a business</p>
            <p>For retailers</p>
            <p>For brands</p>
            <p>For advertisers</p>
            <p>For developers</p>
            <svg
              width="115"
              height="113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-4 -right-4 "
            >
              <path
                d="M4.766 45.734h105.468v64.454H4.766V45.734z"
                fill="#CBCBCB"
              />
              <path
                d="M78.984 88.703h31.25v7.813h-31.25v-7.813z"
                fill="#EBEBEB"
              />
              <path
                d="M4.766 53.547h50.78v48.828H4.767V53.547z"
                fill="#E4E4E2"
              />
              <path
                d="M30.156 83.116a1.953 1.953 0 011.953 1.953v9.25a1.953 1.953 0 11-3.906 0v-9.25a1.953 1.953 0 011.953-1.953z"
                fill="#00A570"
              />
              <path
                d="M55.547 65.266h23.437v44.922H55.547V65.266z"
                fill="#6E3F0D"
              />
              <path
                d="M78.984 65.266h31.25v23.437h-31.25V65.266z"
                fill="#834B10"
              />
              <path
                d="M4.766 102.375h50.78v7.813H4.767v-7.813z"
                fill="#36D28F"
              />
              <path
                d="M2.813 34.016h109.375v11.718H2.812V34.016z"
                fill="#00A570"
              />
              <path
                d="M49.688 34.016h15.624v11.718H49.688V34.016zM18.438 34.016h15.625v11.718H18.437V34.016zM80.938 34.016h15.624v11.718H80.939V34.016zM112.188 34.016H2.812l3.907-7.813H108.28l3.907 7.813z"
                fill="#36D28F"
              />
              <path
                d="M65.313 34.016H49.687l1.954-7.813h11.718l1.953 7.813zM34.063 34.016H18.437l3.907-7.813h13.672l-1.953 7.813zM80.938 34.016l-3.907-7.813h15.625l3.906 7.813H80.939z"
                fill="#02A437"
              />
              <path
                d="M6.719 2.766H108.28v23.437H6.719V2.766z"
                fill="#02A437"
              />
              <path
                d="M14.531 10.578h85.938v7.813H14.531v-7.813z"
                fill="#36D28F"
              />
              <path
                d="M86.797 73.078h15.625v7.813H86.797v-7.813z"
                fill="#E4E4E2"
              />
              <path
                d="M101.277 73.078l-7.813 7.813h-5.522l7.812-7.813h5.523z"
                fill="#E4E4E2"
              />
              <path
                d="M61.406 88.703a1.953 1.953 0 01-1.953-1.953v-3.906a1.953 1.953 0 011.953-1.953h3.907a1.953 1.953 0 010 3.906h-1.954v1.953a1.953 1.953 0 01-1.953 1.953z"
                fill="#533222"
              />
              <path
                d="M55.547 53.547h54.687v11.719H55.547v-11.72z"
                fill="#36D28F"
              />
              <path
                d="M55.547 63.313h54.687v1.955H55.547v-1.956zM61.406 57.453h3.907v3.906h-3.907v-3.906zM69.219 57.453h9.765v3.906H69.22v-3.906zM82.89 57.453h3.907v3.906H82.89v-3.906z"
                fill="#00A570"
              />
              <path
                d="M101.277 73.078l-7.813 7.813h-5.522l7.812-7.813h5.523zM36.016 59.406h3.906v3.907h-3.906v-3.907zM43.828 59.406h5.86v3.907h-5.86v-3.907z"
                fill="#FBFBF9"
              />
              <path
                d="M47.734 74.543a15.898 15.898 0 00-14.814 4.824 13.766 13.766 0 00.156-11.195l-2.92-6.813-2.92 6.812a13.767 13.767 0 00.157 11.195 15.899 15.899 0 00-14.815-4.823l.828 1.38a15.899 15.899 0 0011.222 7.534 15.387 15.387 0 00-6.037 5.843l-1.635 2.821 4.734-1.26c3.4-.906 6.388-2.95 8.464-5.792a15.394 15.394 0 008.528 5.773l4.741 1.23-1.653-2.81a15.385 15.385 0 00-6.078-5.806 15.898 15.898 0 0011.215-7.534l.827-1.379z"
                fill="#36D28F"
              />
              <path
                d="M4.766 45.734h105.468v3.145H4.766v-3.145z"
                fill="#A8A8A8"
              />
              <path d="M6.719 24.25H108.28v1.953H6.719V24.25z" fill="#00A570" />
              <path
                d="M100.469 8.625H14.531a1.953 1.953 0 00-1.953 1.953v7.813a1.953 1.953 0 001.953 1.953h85.938a1.952 1.952 0 001.953-1.953v-7.813a1.954 1.954 0 00-1.953-1.953zm-1.953 7.813H16.484V12.53h82.032v3.906zM61.406 88.703a1.953 1.953 0 001.953-1.953v-1.953h1.953a1.953 1.953 0 000-3.906h-3.906a1.953 1.953 0 00-1.953 1.953v3.906a1.953 1.953 0 001.953 1.953zM61.406 57.453h3.907v3.906h-3.907v-3.906zM69.219 57.453h9.765v3.906H69.22v-3.906zM82.89 57.453h3.907v3.906H82.89v-3.906zM36.016 59.406h3.906v3.907h-3.906v-3.907zM43.828 59.406h5.86v3.907h-5.86v-3.907z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute w-full text-sm text-center text-gray-500 lg:text-base bottom-2">
        Copyright © 2021 CannabisMap.
      </div>
    </div>
  );
};
