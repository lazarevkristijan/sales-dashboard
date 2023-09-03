import { smSectionStyles } from "../constants"
import { SocialStat, SocialLabel } from "../components"

const Social = () => {
  return (
    <div className={`${smSectionStyles} text-center`}>
      <p>Social stats</p>
      <div className="mx-[20px] flex justify-between">
        <SocialStat
          media="instagram"
          followers={1666}
          growth={0.7}
        />
        <div className="relative">
          <SocialLabel
            label="Followers"
            top="110"
          />
          <SocialLabel
            label="Growth"
            top="140"
          />
        </div>
        <SocialStat
          media="facebook"
          followers={2730}
          growth={1}
        />
      </div>
    </div>
  )
}

export default Social
