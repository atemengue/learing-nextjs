import { db } from '@/db';
import { paths } from '@/paths';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';


export default async function TopicList(){
  const topis = await db.topic.findMany();

  const renderedTopics = topis.map((topic) => {
    return (
      <div key={topic.id}>
      <Link href={`${paths.topciShowPath(topic.slug)}`}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
      </div>
    );
  })

  return <div className="flex flex-row flex-wrap gap-2">
    {renderedTopics }
  </div>


} 