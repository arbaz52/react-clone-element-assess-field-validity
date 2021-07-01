import React from "react";

import { isValid } from "./utility";

import { IValidityInformerProps } from "./types";

const ValidityInformer: React.FC<IValidityInformerProps> = ({
  children,
  errorText = "Invalid Text"
}) => {
  console.debug("ValidityInformer.render");

  const [validityError, setValidityError] = React.useState<string>();

  const handleOnChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      console.debug(
        `ValidityInformer.handleOnChange: ${ev.target.value}, pattern: ${children.props.pattern}`
      );
      if (children.props.pattern) {
        setValidityError(
          isValid(ev.target.value, children.props.pattern)
            ? undefined
            : errorText
        );
      }

      /**
       * calling the original callback assigned to the child
       */
      if (children.props.onChange) children.props.onChange(ev);
    },
    [children, errorText]
  );

  const clonnedChild = React.useMemo(() => {
    const props: React.HTMLProps<HTMLInputElement> = {
      onChange: handleOnChange
    };
    const child = React.cloneElement(children, props);

    return child;
  }, [children, handleOnChange]);

  if (!clonnedChild) return <></>;

  return (
    <div className="input-wrapper">
      {clonnedChild}
      {validityError && <span className="error">{validityError}</span>}
    </div>
  );
};

export default React.memo(ValidityInformer);
