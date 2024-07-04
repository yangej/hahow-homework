import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { RuleSet, css } from 'styled-components';

type Type = 'primary' | 'secondary' | 'disabled';

type Size = 's' | 'm' | 'l';

const ButtonTypeStyles: Record<Type, RuleSet> = {
  primary: css`
    color: white;
    background-color: ${(props) => props.theme.colors.darkMain};

    &:hover {
      background-color: ${(props) => props.theme.colors.main};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.mainLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.background};
    }
  `,
  disabled: css`
    color: white;
    background-color: ${(props) => props.theme.colors.secondaryText};
  `,
};

const ButtonSizeStyles: Record<Size, RuleSet> = {
  s: css`
    font-size: 12px;
    line-height: 14px;
    padding: 10px 12px;
    border-radius: 17px;
  `,
  m: css`
    font-size: 16px;
    line-height: 18px;
    padding: 10px 16px;
    border-radius: 19px;
  `,
  l: css`
    font-size: 20px;
    line-height: 22px;
    padding: 10px 20px;
    border-radius: 21px;
  `,
};

const StyledButton = styled.button<{
  $type: Type;
  $size: Size;
  $floating: boolean;
}>`
  ${({ $type }) => ButtonTypeStyles[$type]};
  ${({ $size }) => ButtonSizeStyles[$size]};
  ${({ $floating }) =>
    $floating
      ? css`
          box-shadow:
            rgba(0, 0, 0, 0.04) 0px 0px 2px 0px,
            rgba(0, 0, 0, 0.08) 0px 4px 10px 0px;
        `
      : ''}
  cursor: pointer;
  border: none;
  transition: 300ms;
`;

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  type?: Type;
  size?: Size;
  floating?: boolean;
  children: ReactNode;
};

const Button = ({
  htmlType,
  type = 'primary',
  size = 'm',
  floating = false,
  children,
  ...restProps
}: Props) => {
  return (
    <StyledButton
      type={htmlType}
      $type={type}
      $size={size}
      $floating={floating}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
