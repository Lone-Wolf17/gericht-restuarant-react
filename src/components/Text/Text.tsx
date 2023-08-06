type TextProps = {
  text: string;
  style?: React.CSSProperties;
};

export const OpenSansParagraph = ({ text, style }: TextProps) => (
  <p className="p__opensans" style={style}>
    {text}
  </p>
);

export const CormorantHeadText = ({ text, style }: TextProps) => (
  <h1 className="headtext__cormorant" style={style}>
    {text}
  </h1>
);

export const CormorantParagraph = ({ text, style }: TextProps) => (
  <p className="p__cormorant" style={style}>
    {text}
  </p>
);
