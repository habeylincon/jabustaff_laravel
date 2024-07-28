import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        staffid: '',
        name: '',
        firstname: '',
        middlename: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className='w-96'>
                <h1 className='flex justify-center text-lg font-bold'>Register</h1>

                <form onSubmit={submit} className=''>
                    <div>
                        <InputLabel htmlFor="staffid" value="Staff ID" />

                        <TextInput
                            id="staffid"
                            name="staffid"
                            value={data.staffid}
                            className="mt-1 block w-full"
                            autoComplete="staffid"
                            isFocused={true}
                            onChange={(e) => setData('staffid', e.target.value)}
                            required
                        />

                        <InputError message={errors.staffid} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="name" value="Surname" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-4">
                        <div>
                            <InputLabel htmlFor="name" value="Firstname" />

                            <TextInput
                                id="firstname"
                                name="firstname"
                                value={data.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                isFocused={true}
                                onChange={(e) => setData('firstname', e.target.value)}
                                required
                            />

                            <InputError message={errors.firstname} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="name" value="Middlename" />

                            <TextInput
                                id="middlename"
                                name="middlename"
                                value={data.middlename}
                                className="mt-1 block w-full"
                                autoComplete="middlename"
                                isFocused={true}
                                onChange={(e) => setData('middlename', e.target.value)}
                                required
                            />

                            <InputError message={errors.middlename} className="mt-2" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    
                    <div className='flex justify-between items-center gap-3'>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
