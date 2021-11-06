import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { MainNav } from "@/components/MainNav";
import { Events } from "@/components/Events/Events";
import {
  tabs as eventsTabs,
  tabsContent as eventsTabsContent,
} from "../const/events";
import {
  tabs as museumTabs,
  tabsContent as museumTabsContent,
} from "../const/museum";
import { Video } from "@/components/Video";
import { Lectures } from "@/components/Lectures";
import { Footer } from "@/components/Footer/Footer";
import { Visitors } from "@/components/Visitors";
import { SkipLink } from "@/components/SkipLink";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Государственный музей изобразительных искусств имени А.С.Пушкина
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
      </Head>

      <SkipLink />
      <Header />
      <main className="container m-auto" id="content">
        <MainNav />
        <Visitors />
        <Events
          title="Выставки и события"
          sectionId="events"
          tabsContent={eventsTabsContent}
          tabs={eventsTabs}
          tabsListAriaLabel="Расписание выставок и событий"
        />
        <Events
          title="Музей"
          sectionId="museum"
          tabsContent={museumTabsContent}
          tabs={museumTabs}
          tabsListAriaLabel="Информация о музее"
        />
        <Video />
        <Lectures />
      </main>

      <Footer />
    </>
  );
};

export default Home;
