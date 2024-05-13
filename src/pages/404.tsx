import { Page404Content } from "@/widgets/page-404-content";
import { PageCenteredContentLayout } from "@/widgets/layouts";
import { Header } from "@/widgets/header";

export default function Page404() {
  return (
    <PageCenteredContentLayout
      header={<Header withMenu={false} theme="transparent"/>}
      content={<Page404Content />}
    />
  );
}
