import Categories from "./Categories";
import Search from "./Search";
import Newsletter from "./Newsletter";
import LatestPost from "./LatestPost";
import RecentComments from "./RecentComments";
import Archives from "./Archives";
import TagsCloud from "./TagsCloud";

export default function Sidebar({ search, handleChange }) {
  return (
    <div className="hidden lg:block">
      {handleChange && <Search search={search} handleChange={handleChange} />}
      <Categories />
      <Newsletter />
      <LatestPost />
      <RecentComments />
      <Archives />
      <TagsCloud />
      <img src="/images/ads.jpg" className="w-full" alt="banner ads" />
    </div>
  );
}
