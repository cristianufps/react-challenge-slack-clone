import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItemsData = [
  {
    icon: <MessageIcon />,
    text: "Thread",
    route: "threads",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
    route: "all-direct-messages",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions & Reactions",
    route: "mentions-and-reactions",
  },
  {
    icon: <BookmarkBorderIcon />,
    text: "Save Items",
    route: "saved-items",
  },
  {
    icon: <PeopleIcon />,
    text: "Peoples & Groups",
    route: "groups-and-people",
  },
  {
    icon: <AppsIcon />,
    text: "More",
    route: "more-options",
  },
];
