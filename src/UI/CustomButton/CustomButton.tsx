import { Button, ButtonProps } from '@mantine/core'
import { ReactNode } from 'react'
import style from './CustomButton.module.scss'
import { useMantineTheme } from '@mantine/core'
interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode
  isActive?: boolean
  onClick?: () => void
}

export function CustomButton({ icon, children, isActive, ...props }: CustomButtonProps) {
  const theme = useMantineTheme()
  return (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
      <Button
        variant="subtle"
        leftSection={icon}
        {...props}
        styles={{
          root: {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            color: isActive ? theme.colors.blackCustom[9] : theme.colors.blackCustom[6],
          },
          inner: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 14,
            fontWeight: 500,
            position: 'relative',
          },
        }}
      >
        {children}
        {isActive && (
          <span
            className={style.activeDot}
            style={{ '--active-dot-color': theme.colors.blue[6] } as React.CSSProperties}
          />
        )}
      </Button>
    </div>
  )
}
