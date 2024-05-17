// import React from 'react';

type Props = {
  command: string;
  output: string;
};

const CommandPromptDisplayCatto = ({ command, output }: Props) => {
  return (
    <section className="m-5 flex-1 rounded-2xl border-2 border-white bg-gray-900 font-mono text-gray-200 ">
      <div className="w-100 flex h-10 items-center rounded-t-2xl border-2 border-b-[1px] border-slate-900 bg-gray-700 px-4">
        <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
        <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="p-4 text-slate-400 lg:p-52">Terminal</div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex">
          <div className="lg:mr-2">&gt;</div>
          <div className="flex-1 bg-gray-800 pl-1 focus:outline-none">
            {command}
          </div>
        </div>
        <div className="mt-2">
          <span className="text-green-500">&gt; Output:</span>
          <div className="mt-1 bg-gray-800 p-2">
            <p>{output}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommandPromptDisplayCatto;
