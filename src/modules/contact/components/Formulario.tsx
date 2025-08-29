'use client';

import React, { useState, useTransition } from 'react';
import { Input } from '@/common/components/shadcnui/input';
import { Textarea } from '@/common/components/shadcnui/textarea';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from '@/common/components/shadcnui/form';
import { sendEmail } from '../action/sendEmail';
import { LoaderCircle } from 'lucide-react';
import { RecaptchaWrapper } from './RecaptchaWrapper';

const schema = z.object({
	nombre: z.string().min(1, 'Nombre es obligatorio'),
	empresa: z.string().min(1, 'Empresa es obligatorio'),
	celular: z.string().min(1, 'Celular es obligatorio'),
	correo: z.string().email('Correo inválido'),
	titulo: z.string().min(1, 'Título es obligatorio'),
	mensaje: z.string().min(1, 'Mensaje es obligatorio'),
	recaptchaToken: z.string().min(1, 'reCAPTCHA es obligatorio'),
});

type ContactFormData = z.infer<typeof schema>;

export const ContactForm = () => {
	const [result, setResult] = useState<{
		success: boolean;
		error?: string;
	} | null>(null);
	const [isPending, startTransition] = useTransition();

	const form = useForm<ContactFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			nombre: '',
			empresa: '',
			celular: '',
			correo: '',
			titulo: '',
			mensaje: '',
			recaptchaToken: '',
		},
	});

	const onSubmit = (data: ContactFormData) => {
		startTransition(async () => {
			try {
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) =>
					formData.append(key, value)
				);

				const res = await sendEmail(formData);
				console.log('sendEmail response:', res);

				if (!res.success) {
					setResult({
						success: false,
						error: String(res.error ?? 'Error desconocido'),
					});
				} else {
					setResult({ success: true });
					form.reset();
				}
			} catch (error) {
				setResult({
					success: false,
					error: String(error ?? 'Error desconocido'),
				});
			}
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
				<RecaptchaWrapper
					action="contact_form"
					control={form.control}
					setValue={form.setValue}
				/>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<FormField
						control={form.control}
						name="nombre"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Nombre"
										{...field}
										className="text-black border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="empresa"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Empresa"
										{...field}
										className="text-black border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<FormField
						control={form.control}
						name="celular"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Celular"
										{...field}
										className="text-black border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="correo"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="email"
										placeholder="Correo"
										{...field}
										className="text-black border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="titulo"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Título"
									{...field}
									className="text-black border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="mensaje"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Mensaje"
									{...field}
									className="text-black min-h-[120px] border-[#161A31] bg-[#F0F0F0] placeholder:text-gray-500 focus-visible:border-gray-600 focus-visible:ring-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<button
					type="submit"
					disabled={isPending}
					className={`w-full cursor-pointer rounded-md py-1.5 text-white ${
						isPending
							? 'cursor-not-allowed bg-gray-400'
							: 'bg-ecoandina-rojo hover:bg-ecoandina-rojo/90'
					}`}
				>
					{isPending ? (
						<>
							<LoaderCircle className="mr-2 inline-block animate-spin" />
							Enviando...
						</>
					) : (
						'Enviar'
					)}
				</button>

				{result && (
					<p
						className={`mt-2 text-center ${
							result.success ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{result.success
							? 'Correo enviado ✅'
							: 'Error al enviar el correo, inténtalo de nuevo.'}
					</p>
				)}

				<p className="text-muted-foreground text-xs">
					Este sitio está protegido por reCAPTCHA y se aplican la{' '}
					<a
						href="https://policies.google.com/privacy"
						className="text-white hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Política de Privacidad
					</a>{' '}
					y los{' '}
					<a
						href="https://policies.google.com/terms"
						className="text-white hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Términos de Servicio
					</a>{' '}
					de Google.
				</p>
			</form>
		</Form>
	);
};
