const { dayOfWeek } = require("./app")


test('should return responding day string', () => { 
	let day = dayOfWeek(new Date('12/5/2022'))
	expect(day).toBe("Monday");

	day = dayOfWeek(new Date('12/6/2022'))
	expect(day).toBe("Tuesday");


	day = dayOfWeek(new Date('12/7/2022'))
	expect(day).toBe("Wednesday");

	day = dayOfWeek(new Date('12/8/2022'))
	expect(day).toBe("Thursday");

	day = dayOfWeek(new Date('12/9/2022'))
	expect(day).toBe("Friday");

	day = dayOfWeek(new Date('12/10/2022'))
	expect(day).toBe("Saturday");

	day = dayOfWeek(new Date('12/11/2022'))
	expect(day).toBe("Sunday");
 })