import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required.'),
  password: yup.string().required('Password required.'),
});


export default function SignIn() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await router.push('/dashboard')
  };

  return (
    <Flex
      w='100vw'
      h='100vh'
      alignItems='center'
      justifyContent='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing='4'>

          <Input
            name="email"
            type="email"
            label="Email"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            error={formState.errors.password}
            {...register('password')}
          />

        </Stack>
        <Button
          type="submit"
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  )
}
