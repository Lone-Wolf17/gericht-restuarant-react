type TextProps = {
  text: string;
  color?: string | undefined;
};

export const OpenSansParagraph = ({ text, color }: TextProps) => (
  <p className="p__opensans" style={{ color }}>
    {text}
  </p>
);

export const CormorantHeadText = ({ text, color }: TextProps) => (
  <h1 className="headtext__cormorant" style={{ color }}>
    {text}
  </h1>
);

export const CormorantParagraph = ({ text, color }: TextProps) => (
  <p className="p__cormorant" style={{ color }}>
    {text}
  </p>
);
