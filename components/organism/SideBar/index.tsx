import Footer from "./footer";
import MenuItem from "./MenuItem";
import Profile from "./profile";

interface SideBarProps {
  activeMenu: "overview" | "transaction" | "settings";
}

export default function SideBar(props) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu == "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transaction"
            active={activeMenu === "transaction"}
            href="/member/transactions"
          />
          <MenuItem
            title="Messages"
            icon="ic-menu-messages"
            active={activeMenu === "messages"}
            href="/member"
          />
          <MenuItem
            title="Card"
            icon="ic-menu-card"
            active={activeMenu === "card"}
            href="/member"
          />
          <MenuItem
            title="Reward"
            icon="ic-menu-reward"
            active={activeMenu === "reward"}
            href="/member"
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem
            title="Log Out"
            icon="ic-menu-logout"
            active={activeMenu === "logout"}
            href="/sign-in"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
