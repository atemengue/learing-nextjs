import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { fetchCommentByPostId } from '@/db/queries/comments';
import { paths } from '@/paths';
import Link from 'next/link';

interface PostShowPageProps {
  params: {
    slug: string,
    postId: string
  }
}
export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return <div className="space-y-3">
    <Link className="underline decoration-solid" href={paths.topciShowPath(slug)}>
      {'< '} Back to { slug }
    </Link>
    <PostShow postId={postId} />
    <CommentCreateForm postId={postId} startOpen />
    <CommentList fetchData={() => fetchCommentByPostId(postId)} />

  </div>
}