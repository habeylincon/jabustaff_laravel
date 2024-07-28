import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';

import { FormEventHandler } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Biodata({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        staffid: '',
        name: '',
        firstname: '',
        middlename: '',
        email: '',
        password: '',
        password_confirmation: '',


        staff_status: '',
        title: '',
        phoneno1: '',
        phoneno2: '',
        gender: '',
        marital: '',
        college: '',
        department: '',
        unit: '',
        dob: '',
        address: '',
        country: '',
        level: '',
        step: '',
        firstappoint_date: '',
        lastappoint_date: '',
        firstpost: '',
        app_confirmed: '',
        date_confirmed: '',
        currentpost: '',
        currentpostdate: '',
        salary: '',
        status: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Staff BIodata" />

            <div className='flex justify-center items-center ga'>
                <form onSubmit={submit} className='w-[500px]'>
                    <div className='flex justify-between gap-4'>
                        <div>
                            <InputLabel htmlFor="staff_status" value="Staff Status" />

                            <TextInput
                                id="staff_status"
                                name="staff_status"
                                value={data.staff_status}
                                className="mt-1 block w-full"
                                autoComplete="staff_status"
                                isFocused={true}
                                onChange={(e) => setData('staff_status', e.target.value)}
                                required
                            />

                            <InputError message={errors.staff_status} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                            />

                            <InputError message={errors.title} className="mt-2" />
                        </div>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div>
                            <InputLabel htmlFor="phoneno1" value="Staff ID" />

                            <TextInput
                                id="phoneno1"
                                name="phoneno1"
                                value={data.phoneno1}
                                className="mt-1 block w-full"
                                autoComplete="phoneno1"
                                isFocused={true}
                                onChange={(e) => setData('phoneno1', e.target.value)}
                                required
                            />

                            <InputError message={errors.phoneno1} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="phoneno2" value="Staff ID" />

                            <TextInput
                                id="phoneno2"
                                name="phoneno2"
                                value={data.phoneno2}
                                className="mt-1 block w-full"
                                autoComplete="phoneno2"
                                isFocused={true}
                                onChange={(e) => setData('phoneno2', e.target.value)}
                                required
                            />

                            <InputError message={errors.phoneno2} className="mt-2" />
                        </div>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div>
                            <InputLabel htmlFor="gender" value="Gender" />

                            <TextInput
                                id="gender"
                                name="gender"
                                value={data.gender}
                                className="mt-1 block w-full"
                                autoComplete="gender"
                                isFocused={true}
                                onChange={(e) => setData('gender', e.target.value)}
                                required
                            />

                            <InputError message={errors.gender} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="marital" value="Marital Status" />

                            <TextInput
                                id="marital"
                                name="marital"
                                value={data.marital}
                                className="mt-1 block w-full"
                                autoComplete="marital"
                                isFocused={true}
                                onChange={(e) => setData('marital', e.target.value)}
                                required
                            />

                            <InputError message={errors.marital} className="mt-2" />
                        </div>
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div className='w-full'>
                            <InputLabel htmlFor="college" value="College" />

                            <TextInput
                                id="college"
                                name="college"
                                value={data.college}
                                className="mt-1 block w-full"
                                autoComplete="college"
                                isFocused={true}
                                onChange={(e) => setData('college', e.target.value)}
                            />

                            <InputError message={errors.college} className="mt-2" />
                        </div>
                        
                        <div className='w-full'>
                            <InputLabel htmlFor="department" value="Department" />

                            <TextInput
                                id="department"
                                name="department"
                                value={data.department}
                                className="mt-1 block w-full"
                                autoComplete="department"
                                isFocused={true}
                                onChange={(e) => setData('department', e.target.value)}
                            />

                            <InputError message={errors.department} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="unit" value="Unit" />

                        <TextInput
                            id="unit"
                            name="unit"
                            value={data.unit}
                            className="mt-1 block w-full"
                            autoComplete="unit"
                            isFocused={true}
                            onChange={(e) => setData('unit', e.target.value)}
                        />

                        <InputError message={errors.unit} className="mt-2" />
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div className='w-full'>
                            <InputLabel htmlFor="dob" value="Date of Birth" />

                            <TextInput
                                id="dob"
                                name="dob"
                                value={data.dob}
                                className="mt-1 block w-full"
                                autoComplete="dob"
                                isFocused={true}
                                onChange={(e) => setData('dob', e.target.value)}
                            />

                            <InputError message={errors.dob} className="mt-2" />
                        </div>


                        <div className='w-full'>
                            <InputLabel htmlFor="address" value="Address" />

                            <TextInput
                                id="address"
                                name="address"
                                value={data.address}
                                className="mt-1 block w-full"
                                autoComplete="address"
                                isFocused={true}
                                onChange={(e) => setData('address', e.target.value)}
                            />

                            <InputError message={errors.address} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="country" value="Country" />

                        <TextInput
                            id="country"
                            name="country"
                            value={data.country}
                            className="mt-1 block w-full"
                            autoComplete="country"
                            isFocused={true}
                            onChange={(e) => setData('country', e.target.value)}
                            required
                        />

                        <InputError message={errors.country} className="mt-2" />
                    </div>

                    <div className='flex justify-between gap-4'>
                        <div className='w-full'>
                            <InputLabel htmlFor="level" value="Level" />

                            <TextInput
                                id="level"
                                name="level"
                                value={data.level}
                                className="mt-1 block w-full"
                                autoComplete="level"
                                isFocused={true}
                                onChange={(e) => setData('level', e.target.value)}
                                required
                            />

                            <InputError message={errors.level} className="mt-2" />
                        </div>

                        <div className='w-full'>
                            <InputLabel htmlFor="step" value="Step" />

                            <TextInput
                                id="step"
                                name="step"
                                value={data.step}
                                className="mt-1 block w-full"
                                autoComplete="step"
                                isFocused={true}
                                onChange={(e) => setData('step', e.target.value)}
                                required
                            />

                            <InputError message={errors.step} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <InputLabel htmlFor="firstpost" value="Firstpost" />

                        <TextInput
                            id="firstpost"
                            name="firstpost"
                            value={data.firstpost}
                            className="mt-1 block w-full"
                            autoComplete="firstpost"
                            isFocused={true}
                            onChange={(e) => setData('firstpost', e.target.value)}
                            required
                        />

                        <InputError message={errors.firstpost} className="mt-2" />
                    </div>

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
        </AuthenticatedLayout>
    );
}
