import { motion, Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimationWrapper({children, className, delay}: {children: React.ReactNode, className: string, delay: number}) {
  return (
    <motion.div
        className={className}
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >{children}</motion.div>
  )
}

export type AnimatedListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function AnimatedList<T>({ items, renderItem, className, itemClassName }: AnimatedListProps<T>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className={itemClassName}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: index * 0.08,
          }}
        >
          {renderItem(item, index)}
        </motion.li>
      ))}
    </ul>
  );
}