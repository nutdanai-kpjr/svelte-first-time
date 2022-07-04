declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Project{
        name: string;
		description: string;
		image: string;
		link: string;
		startDate:string;
		endDate:string;
    }
 
}

export {}

