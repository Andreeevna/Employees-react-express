import { User } from '@prisma/client'
import { Card, Form, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/custom-button'
import { CustomInput } from '../../components/custom-input'
import { Layout } from '../../components/layout'
import { PasswordInput } from '../../components/password-input'
import { Paths } from '../../paths'

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }

export const Register = () => {
	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Зарегистрируйтесь' style={{ width: '30rem' }}>
					<Form onFinish={() => {}}>
						<CustomInput type='text' name='name' placeholder='Имя' />
						<CustomInput type='email' name='email' placeholder='Email' />
						<PasswordInput name='password' placeholder='Пароль' />
						<PasswordInput name='confirmPassword' placeholder='Пароль' />
						<CustomButton type='primary' htmlType='submit'>
							Зарегистрироваться
						</CustomButton>
					</Form>
					<Space direction='vertical' size='large'>
						<Typography.Text>
							Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
						</Typography.Text>
					</Space>
				</Card>
			</Row>
		</Layout>
	)
}
