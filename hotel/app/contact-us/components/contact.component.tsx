"use client";
import type { NextPage } from 'next';
import cn, { Argument } from 'classnames';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const ContactInfo: NextPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  return (
    <div className="flex items-center w-screen mt-8 bg-blue-50 h-max text-blue-800 justify-center p-8 space-x-2">
      
      <form className=" flex p-11 rounded-md border shadow-sm bg-blue-50 my-10 flex-col space-y-2 " action=" " method="post">
        <div className=" flex space-x-2 ">
          <Input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <Input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <textarea
          className="border border-gray-300 rounded-md p-2 resize-none h-52 focus:outline-none "
          name="Message"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

        >
          Submit
        </button>
        
      </form>
    </div>
  );
};

const inputClasses = {
  root: `group relative h-14 w-full rounded-md border border-[#a5a5a6] focus-within:border-primary focus-within:ring-1 focus-within:ring-primary`,
  label: `absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-base pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary`,
  input: `z-10 h-full w-full rounded-md px-3.5 py-4 outline-none`,
};

function Input({ placeholder, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className={inputClasses.root}>
      <label
        className={cnMerge([
          inputClasses.label,
          props.value && 'top-0 text-xs',
        ])}
        htmlFor={props.id ?? props.name}
      >
        {placeholder}
      </label>
      <input
        id={props.id ?? props.name}
        {...props}
        className={inputClasses.input}
      />
    </div>
  );
}

function cnMerge(...classNames: Argument[]) {
  return twMerge(cn(classNames));
}

export default ContactInfo;
