import { MY_REPOS_URL, WEBSITE_REPO_ID } from "../../Data/globalVariables";
import { getSpecificRepo } from "../../Functions/helper";
import useAsync from "../../Hooks/Helper/useAsync";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./RepoStarsForks.module.scss";

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
        className={styles.repoStarsForks}
        title="Website's repository"
      >
        <div className={styles.wrapper}>
          <SvgIcon name="star" /> <span>{repoStars}</span>
        </div>

        <div className={styles.wrapper}>
          <SvgIcon name="codeFork" /> <span>{repoForks}</span>
        </div>
      </a>
    )
  );
};
export default RepoStarsForks;
