import AppButton from "./AppButton"

interface ContactProps {
    children: React.ReactNode,
    url: string,
    styles?:string,
    variant?: "primary" | "secondary"
}
const ContactLink = ({children, url, styles, variant}: ContactProps) => {
  return (
    <a target="_blank" href={url}>
        <AppButton styles={styles} variant={variant}>{children}</AppButton>
    </a>
  )
}

export default ContactLink
