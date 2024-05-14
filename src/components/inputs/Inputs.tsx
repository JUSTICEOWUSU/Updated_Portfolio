function CustomInput({
  type,
  value,
  onchange,
    label,
  required
}: {
  type: string;
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
        label: string;
  required ? : boolean
}) {
  return (
    <span className="block my-5">
      <span className="capitalize">{label}</span>
      <input
        className="w-full bg-transparent border-[1px] border-blue-500  p-1 py-2 outline-none bg-blue-200"
        type={type}
        value={value}
        onChange={onchange}
        required={required}
      />
    </span>
  );
}

// contact-me message field(textarea)
function TextArea({
  placeholder,
  value,
  onchange,
}: {
  placeholder: string;
  value: string;
  onchange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <span className= "block my-10">
      <textarea
        className="w-full bg-transparent border-[1px] border-blue-500 px-1 py-5 pb-1 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      ></textarea>
    </span>
  );
}



function Submit({
  onclick,
  text,
}: {
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) {
  return (
    <span className="w-full inline-block py-3 mb-5 relative">
      <button className="px-10 py-2 border-black border-[1px] right-0 absolute bottom-0 hover:bg-blue-400" onClick={onclick} type="submit">
        {text}
      </button>
    </span>
  );
}

export default CustomInput;
export { TextArea, Submit };
