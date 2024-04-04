import { MY_REPOS_URL, WEBSITE_REPO_ID } from "src/Data/globalVariables";
import { getSpecificRepo } from "src/Functions/helper";
import useAsync from "src/Hooks/Helper/useAsync";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import ToolTip from "../Shared/MiniComponents/ToolTip";
import s from "./RepoStarsForks.module.scss";

const RepoStarsForks = () => {
  const [reposData, isError] = useAsync(MY_REPOS_URL);
  const websiteRepo = getSpecificRepo(reposData, WEBSITE_REPO_ID);
  const repoStars = websiteRepo?.stargazers_count;
  const repoForks = websiteRepo?.forks;
  const repoUrl = websiteRepo?.html_url;

  return (
    !isError && (
      <a
        href={repoUrl}
        target="_blank"
        className={s.repoStarsForks}
        aria-label="Website's repository"
      >
        <div className={s.wrapper}>
          <SvgIcon name="star" /> <span className={s.number}>{repoStars}</span>
        </div>

        <div className={s.wrapper}>
          <SvgIcon name="codeFork" />
          <span className={s.number}>{repoForks}</span>
        </div>

        <ToolTip left="77px" bottom="40px" content="website's repository" />
      </a>
    )
  );
};
export default RepoStarsForks;
