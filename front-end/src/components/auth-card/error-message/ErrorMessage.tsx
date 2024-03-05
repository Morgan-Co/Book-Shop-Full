import { AnimatePresence, motion } from 'framer-motion'
import { FieldErrors } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

const ErrorMessage = ({ errors }: { errors: FieldErrors<IAuthForm> }) => {
	if (!errors) return

	return (
		<AnimatePresence>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={`text-red text-[8px] font-bold leading-[10px] mt-[9px] z-0 relative`}
			>
				{errors.root?.message}
			</motion.span>
		</AnimatePresence>
	)
}

export default ErrorMessage
