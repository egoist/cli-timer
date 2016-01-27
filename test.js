import test from 'ava'
import execa from 'execa'

test('start', async t => {
	const {stdout} = await execa.shell('node cli-timer start')
	t.true(stdout.indexOf('Start at') > -1)
})

test('tick', async t => {
	const {stdout} = await execa.shell('node cli-timer tick')
	t.true(stdout.indexOf('seconds') > -1)
})
