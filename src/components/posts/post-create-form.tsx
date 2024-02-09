'use client';

import * as actions from "@/actions";
import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { fork } from 'child_process';
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';

interface PostCreateFormProps {
  slug: string
}

export default function PostCreateForm({ slug }: PostCreateFormProps){
  const [formState, action] =useFormState(
    actions.createPost.bind(null,slug), { 
    errors: {}
  });


  return <Popover placement="left">
    <PopoverTrigger>
      <Button color="primary">
        Create Post
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <form action={action}>
        <div className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-lg">Create Post</h3>
        </div>
        <div>
          <Input 
          placeholder="Title"
          name="title"
          label="Title"
          labelPlacement="outside"
          errorMessage={formState.errors.title?.join(', ')}
          isInvalid={!!formState.errors.title}
          />
          <Input
            placeholder='Content'
            name="content"
            label="Content"
            labelPlacement="outside"
            errorMessage={formState.errors.content?.join(', ')}
            isInvalid={!!formState.errors.content}
            />

            {
              formState.errors._form ?
              ( <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form.join(', ')}
              </div>)
              : null
            }
          <div className="py-2">
            <FormButton>
              Create Post
            </FormButton>
          </div>
        </div>
      </form>
    </PopoverContent>
  </Popover>
}