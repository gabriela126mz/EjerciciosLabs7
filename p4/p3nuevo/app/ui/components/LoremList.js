import React from 'react';
import Link from 'next/link';

function LoremList() {
  const loremIpsumData = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  ];

  return (
    <div>
      <h1>Lorem Ipsum List</h1>
      <ul>
        {loremIpsumData.map((text, index) => (
          <li key={index}>
            <Link href={`/applications/notes/${index}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoremList;
