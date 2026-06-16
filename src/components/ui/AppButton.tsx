import React, { type ComponentPropsWithRef } from 'react'
import { OriginButtonPrimary } from './OriginButtonPrimary'
import { OriginButtonSecondary } from './OriginButtonSecondary'

type ButtonVariant = "primary" | "secondary" | "default";

interface AppButtonProps extends ComponentPropsWithRef<"button"> {
    variant?: ButtonVariant,
    children: React.ReactNode,
    styles?: string,
}

const AppButton = ({ variant = "default", children, styles = "", onClick, ...rest }: AppButtonProps) => {
    if (variant === "primary") {
        return (
            <OriginButtonPrimary className={styles} onClick={onClick} {...rest}>
                {children}
            </OriginButtonPrimary>
        )
    }

    if (variant === "secondary") {
        return (
            <OriginButtonSecondary className={styles} onClick={onClick} {...rest}>
                {children}
            </OriginButtonSecondary>
        )
    }

    return (
        <button
            className={`${styles} cursor-pointer`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default AppButton
