import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Joel John. All rights reserved.
      </small>
      <p className="text-xs">
        Developed by{" "}
        <a
          href="https://froshx.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-500 hover:underline"
        >
          FroshX
        </a>
        .
      </p>
    </footer>
  );
}
