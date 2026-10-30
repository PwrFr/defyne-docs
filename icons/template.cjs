const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ${variables.componentName} = ({
  size = 24,
  width,
  height,
  ...restProps
}: IconProps) => {
  const props = {
    ...restProps,
    width: width ?? size,
    height: height ?? size,
  };

  return (
    ${variables.jsx}
  );
};

${variables.exports};
`;
};

module.exports = template;
