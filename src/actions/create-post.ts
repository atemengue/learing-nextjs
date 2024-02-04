'use server';
import { z } from 'zod';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {
    message: 'Must be lowercase letters or dashes without spaces'
  }), 
  description: z.string().min(10)
})

export async function createPost(formData: FormData)  {
  // TODO: revalidate Topic Show Page
  const name = formData.get('name');
  const description = formData.get('description');

}