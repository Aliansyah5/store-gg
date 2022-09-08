import SideBar from "../../../components/organism/SideBar";
import TranscationContent from "../../../components/organism/TranscationContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transaction" />
      <TranscationContent />
    </section>
  );
}
