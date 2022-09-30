import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-texture p-10 text-gray-900 bg-cover bg-center   ">
      <div className="footer">
      <div>
        <span className="footer-title">Services</span>
        <Link to="" className="link link-hover">Branding</Link>
        <Link to="" className="link link-hover">Design</Link>
        <Link to="" className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="" className="link link-hover">About us</Link>
        <Link to="" className="link link-hover">Contact</Link>
        <Link to="" className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="" className="link link-hover">Terms of use</Link>
        <Link to="" className="link link-hover">Privacy policy</Link>
        <Link to="" className="link link-hover">Cookie policy</Link>
      </div>
      </div>
      <p className="text-center mt-4 text-md">Copyright 2022 All Rights Reserved </p>
    </footer>
  );
};

export default Footer;
