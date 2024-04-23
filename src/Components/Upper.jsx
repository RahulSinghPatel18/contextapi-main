import React from 'react';

function withUppercase(WrappedComponent) {
  return function(props) {
    const children = React.Children.map(props.children, child => {
      if (typeof child === 'string') {
        return child.toUpperCase();
      }
      return child;
    });

    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };
}

function MyComponent(props) {
  return <div>{props.children}</div>;
}

const Uppercase = withUppercase(MyComponent);

function Upper() {
  return (
    <div>
      <Uppercase style={{textAlign:'center'}}>Hello  Rahul</Uppercase>
      <Uppercase>World</Uppercase>
    </div>
  );
}

export default Upper;
