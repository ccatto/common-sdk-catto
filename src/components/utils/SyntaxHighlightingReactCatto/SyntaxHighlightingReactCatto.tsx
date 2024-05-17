'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  codeString: string;
  codeString1?: string;
  // codeString2?: string,
};

// const SyntaxHighlightingReactCatto = ({ codeString }: Props) => {
const SyntaxHighlightingReactCatto = ({
  codeString,
  codeString1,
  // codeString2,
}: Props) => {

  // const codeString22 = '(num) => num + 1<br/> next + "\n" + address';
  const str = 'Hello \n World';

  return (
    <div className="w-[18rem] lg:w-full">
      <SyntaxHighlighter
        language="javascript"
        style={materialDark}
        showLineNumbers
        wrapLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlightingReactCatto;
