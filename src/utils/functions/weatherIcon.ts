import { Icons } from '../../assets/images';

export interface IconsListFormat {
	abbr: string;
	icon: string;
}
interface IconProps {
	weatherStateAbbr: string;
}

const iconsList: IconsListFormat[] = [
	{ abbr: 'c', icon: Icons.Clear },
	{ abbr: 'hc', icon: Icons.HeavyCloud },
	{ abbr: 'sn', icon: Icons.Snow },
	{ abbr: 'sl', icon: Icons.Sleet },
	{ abbr: 'h', icon: Icons.Hail },
	{ abbr: 't', icon: Icons.Thunderstorm },
	{ abbr: 'hr', icon: Icons.HeavyRain },
	{ abbr: 'lr', icon: Icons.LightRain },
	{ abbr: 's', icon: Icons.Shower },
	{ abbr: 'lc', icon: Icons.LightCloud },
	{ abbr: 'cb', icon: Icons.CloudBackground },
];

// eslint-disable-next-line consistent-return
export const getIcon = (weatherStateAbbr: string): string | void => {
	for (let i = 0; i < iconsList.length; i += 1) {
		if (iconsList[i].abbr === weatherStateAbbr) {
			return iconsList[i].icon;
		}
	}
};
