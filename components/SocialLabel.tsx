const SocialLabel = ({ label, top }: { label: string; top: string }) => {
  return <p className={`absolute -translate-x-[50%] top-[${top}px]`}>{label}</p>
}

export default SocialLabel
