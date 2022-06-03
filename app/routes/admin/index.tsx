import Editor from '~/components/editor.client';
import { ClientOnly } from 'remix-utils';
import '~/types/editor';
import { Outlet } from 'remix';
export default function AdminIndex() {
  return (
    <div className="adminNewPostLink">
      {/* <ClientOnly>{() => <Editor />}</ClientOnly> */}
      <button>Save Article</button>
    </div>
  );
}
